package com.example.demo;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);

//		Map config = new HashMap();
//		config.put("cloud_name", "dpakusmuz");
//		config.put("api_key", "441931686243516");
//		config.put("api_secret", "yQROf2TxWtqEGB8OJqwVXP6z1AQ");
//		Cloudinary cloudinary = new Cloudinary(config);
//		try {
//			File empty = File.createTempFile("temp", ".txt");
//			FileWriter writer = new FileWriter(empty) ;
//				writer.write("This is a sample text to write in the temporary file");
//			Map result = cloudinary.uploader().upload(empty
//					, ObjectUtils.asMap("folder", "users_images/eretrhrthtrh/"));
//		} catch (IOException exception) {
//			System.out.println(exception.getMessage());
//		}
	}

}
