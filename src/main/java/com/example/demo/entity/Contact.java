package com.example.demo.entity;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Data
//@AllArgsConstructor
//@NoArgsConstructor
@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String firstName;
    private String lastName;
    private String address;
    private String phoneNumber;
    private String imagesUrl;

    public Contact(String firstName, String lastName, String address, String phoneNumber, String imagesUrl) throws IOException {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.imagesUrl = imagesUrl;

        //generateFolderId(id);
    }

    public Contact() {

        //generateFolderId(id);

    }

    public void generateFolderId(Integer id){

        Map config = new HashMap();
        config.put("cloud_name", "dpakusmuz");
        config.put("api_key", "441931686243516");
        config.put("api_secret", "yQROf2TxWtqEGB8OJqwVXP6z1AQ");
        Cloudinary cloudinary = new Cloudinary(config);
        try {
            File empty = File.createTempFile("temp", ".txt");
        Map result = cloudinary.uploader().upload(empty,
                ObjectUtils.asMap("folder", "user_images/folder/"));
    } catch (IOException exception) {
        System.out.println(exception.getMessage());
    }
    }
}
