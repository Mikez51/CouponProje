package com.proji.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Entity
@Table(name = "Customers")
@Component
@Scope("prototype")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String LastName;
	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
	private List<Coupon> coupons;

//								**CTRS**
	/**
	 * Spring use only
	 */
	public Customer() {
	}

	/**
	 * Do not use,Id auto generated
	 */
	public Customer(int id, String firstName, String lastName, String email, String password, List<Coupon> coupons) {
		super();
		this.id = id;
		this.firstName = firstName;
		LastName = lastName;
		this.email = email;
		this.password = password;
		this.coupons = coupons;
	}

	/**
	 * @param firstName
	 * @param lastName
	 * @param email     Must be Unique.
	 * @param password
	 */
	public Customer(String firstName, String lastName, String email, String password) {
		super();
		this.firstName = firstName;
		LastName = lastName;
		this.email = email;
		this.password = password;
	}

	// **Getters/Setters**
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public List<Coupon> getCoupons() {
		return coupons;
	}

//							**Printer**
	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstName=" + firstName + ", LastName=" + LastName + ", email=" + email
				+ ", password=" + password + ", coupons=" + coupons + "]";
	};

}
