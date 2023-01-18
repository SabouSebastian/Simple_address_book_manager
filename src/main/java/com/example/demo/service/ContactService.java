package com.example.demo.service;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repository;

    public Contact saveContact(Contact contact) {
        return repository.save(contact);
    }

    public List<Contact> saveContacts(List<Contact> contacts) {
        return repository.saveAll(contacts);
    }

    public List<Contact> getContacts() {
        return repository.findAll();
    }

    public Contact getContactById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public Contact getContactByFirstName(String firstName) {
        return repository.findByFirstName(firstName);
    }

    public Contact getContactByLastName(String lastName) {
        return repository.findByLastName(lastName);
    }

    public String deleteContact(Integer id) {
        repository.deleteById(id);
        return "Contact with id " + id + " removed";
    }

    public void deleteAllContacts() {
        repository.deleteAll();
    }

    public Contact updateContact(Contact contact) {
        Contact existingContact = repository.findById(contact.getId()).orElse(null);
        existingContact.setFirstName(contact.getFirstName());
        existingContact.setLastName(contact.getLastName());
        existingContact.setAddress(contact.getAddress());
        existingContact.setPhoneNumber(contact.getPhoneNumber());
        return repository.save(existingContact);
    }
}
