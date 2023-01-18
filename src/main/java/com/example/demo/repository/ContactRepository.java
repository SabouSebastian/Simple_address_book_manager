package com.example.demo.repository;

import com.example.demo.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact,Integer> {

    Contact findByFirstName(String firstName);

    Contact findByLastName(String lastName);
}
