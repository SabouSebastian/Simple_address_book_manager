package com.example.demo.controller;

import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.*;

@Controller
public class ContactController {

    @Autowired
    private ContactService service;

    @PostMapping("/contacts/add")
    public String addContact(@ModelAttribute Contact contact) {

        service.saveContact(contact);
        return "redirect:/contacts";
    }

    @PostMapping("/contacts/update")
    public String updateContact(@ModelAttribute("contact") Contact contact) {

        service.updateContact(contact);
        return "redirect:/contacts";
    }
    @DeleteMapping("/contacts/delete/{id}")
    @ResponseBody
    public ResponseEntity<Void> deleteContact(@PathVariable Integer id) {
        service.deleteContact(id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
    @GetMapping(value = "/contacts", produces = MediaType.TEXT_HTML_VALUE)
    public String listContactsView(Model model) {
        Contact contact = new Contact();
        model.addAttribute("contact", contact);
        model.addAttribute("contacts",service.getContacts());

        return "contacts";
    }

    @GetMapping(value = "/contacts", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Contact> listContactsBody() {
        return service.getContacts();
    }


    @PostMapping("/addContacts")
    @ResponseBody
    public List<Contact>addContacts(@RequestBody List<Contact>contacts) {
        return service.saveContacts(contacts);
    }

    @GetMapping("/contacts/{id}")
    @ResponseBody
    public Contact findContactById(@PathVariable Integer id) {
        return service.getContactById(id);
    }

    @GetMapping("/contactByFirstName/{firstName}")
    public Contact findContactByFirstName(@PathVariable String firstName) {
        return service.getContactByFirstName(firstName);
    }

    @GetMapping("/contactByLastName/{lastName}")
    public Contact findContactByLastName(@PathVariable String lastName) {
        return service.getContactByLastName(lastName);
    }

}
