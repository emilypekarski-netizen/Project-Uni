import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DrainDetail = () => {
  const [drain, setDrain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDrainDetails();
  }, [id]);

  const fetchDrainDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/drains/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch drain details');
      }
      const data = await response.json();
      setDrain(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const adoptDrain = async () => {
    try {
      // In a real app, you would get the userId from authentication
      const userId = 1; // Temporary hardcoded user ID
      const response = await fetch(`http://localhost:8080/api/drains/${id}/adopt?userId=${userId}`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to adopt drain');
      }
      
      // Refresh drain details
      fetchDrainDetails();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading drain details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!drain) return <div>No drain found</div>;

  return (
    <div className="drain-detail">
      <h2>{drain.name}</h2>
      <div className="drain-info">
        <img src={drain.imageUrl} alt={drain.name} className="drain-image" />
        <div className="map-container">
          <iframe
            width="400"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${drain.latitude},${drain.longitude}`}
            allowFullScreen
          />
        </div>
        <div className="drain-status">
          <p>Status: {drain.adoptedByUserId ? 'Adopted' : 'Available'}</p>
          <p>Location: {drain.latitude}, {drain.longitude}</p>
        </div>
        {!drain.adoptedByUserId && (
          <button 
            onClick={adoptDrain}
            className="adopt-button"
          >
            Adopt this Drain
          </button>
        )}
      </div>
    </div>
  );
};

export default DrainDetail;