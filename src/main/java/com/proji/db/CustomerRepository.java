package com.proji.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proji.beans.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	public Customer findCustomerByEmailAndPassword(String email, String password);


}
