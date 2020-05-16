package com.proji.db;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proji.beans.Customer;
import com.proji.exceptions.CustomerNotFoundExcpetion;

@Repository
public class CustomerDBDAO {

	@Autowired
	private CustomerRepository cusRepo;

	public void addCustomer(Customer customer) {
		cusRepo.save(customer);
	}

	public void updateCustomer(Customer customer) throws CustomerNotFoundExcpetion {
		if (cusRepo.existsById(customer.getId()))
			cusRepo.save(customer);
		else
			throw new CustomerNotFoundExcpetion();

	}

	public void deleteCustomer(int customerId) {
		cusRepo.deleteById(customerId);
	}

	public List<Customer> getAllCustomers() {
		return cusRepo.findAll();
	}

	public Customer getCustomerById(int id) throws CustomerNotFoundExcpetion {
		Optional<Customer> opt = cusRepo.findById(id);
		if (opt.isPresent())
			return opt.get();
		else
			throw new CustomerNotFoundExcpetion();
	}

//	public Coupon getCustomerCoupById(int id) {
//		Optional<Customer> opt = cusRepo.findById(id);
//
//	}
	public Customer findCustomerByEmailAndPassword(String email, String password) {
		return cusRepo.findCustomerByEmailAndPassword(email, password);
	}

}
