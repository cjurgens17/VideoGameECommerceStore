package com.revature.Project2;

import com.revature.Project2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;
//@ComponentScan("com.revature.Project2.aspects")
@EntityScan("com.revature.Project2.models")
@EnableTransactionManagement
@EnableJpaRepositories("com.revature.Project2.repos")
@EnableJpaAuditing
@SpringBootApplication
public class Project2Application {



	public static void main(String[] args) {
		SpringApplication.run(Project2Application.class, args);
	}

}
