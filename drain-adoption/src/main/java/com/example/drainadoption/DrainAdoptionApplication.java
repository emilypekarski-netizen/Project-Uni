package com.example.drainadoption;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.example.drainadoption.model.Drain;
import com.example.drainadoption.repository.DrainRepository;

@SpringBootApplication
public class DrainAdoptionApplication {

    public static void main(String[] args) {
        SpringApplication.run(DrainAdoptionApplication.class, args);
    }

    @Bean
    public CommandLineRunner seedDatabase(DrainRepository drainRepository) {
        return args -> {
            // Only seed if the database is empty
            if (drainRepository.count() == 0) {
                // Drain 1 - Downtown
                Drain drain1 = new Drain();
                drain1.setName("Downtown Main Street Drain");
                drain1.setImageUrl("https://example.com/images/drain1.jpg");
                drain1.setLatitude(47.6062);
                drain1.setLongitude(-122.3321);
                drainRepository.save(drain1);

                // Drain 2 - Park Area
                Drain drain2 = new Drain();
                drain2.setName("Central Park Storm Drain");
                drain2.setImageUrl("https://example.com/images/drain2.jpg");
                drain2.setLatitude(47.6152);
                drain2.setLongitude(-122.3185);
                drainRepository.save(drain2);

                // Drain 3 - Residential Area
                Drain drain3 = new Drain();
                drain3.setName("Maple Street Corner Drain");
                drain3.setImageUrl("https://example.com/images/drain3.jpg");
                drain3.setLatitude(47.6205);
                drain3.setLongitude(-122.3447);
                drainRepository.save(drain3);

                // Drain 4 - Shopping District
                Drain drain4 = new Drain();
                drain4.setName("Market Square Drain");
                drain4.setImageUrl("https://example.com/images/drain4.jpg");
                drain4.setLatitude(47.6099);
                drain4.setLongitude(-122.3422);
                drainRepository.save(drain4);

                System.out.println("Database seeded with initial drain data!");
            }
        };
    }
}