import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DrainList = () => {
  const [drains, setDrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDrains();
  }, []);

  const fetchDrains = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/drains');
      if (!response.ok) {
        throw new Error('Failed to fetch drains');
      }
      const data = await response.json();
      setDrains(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading drains...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="drain-list">
      <h2>Available Drains</h2>
      <div className="drain-grid">
        {drains.map(drain => (
          <div key={drain.id} className="drain-card">
            <img 
              src={drain.imageUrl} 
              alt={drain.name} 
              className="drain-image"
            />
            <h3>{drain.name}</h3>
            <p>
              Status: {drain.adoptedByUserId ? 'Adopted' : 'Available'}
            </p>
            <Link to={`/drains/${drain.id}`} className="view-button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrainList;