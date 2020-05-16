package com.proji.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Companies")
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false, unique = true)
	private String email;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Coupon> coupons;

//									**CTRS**

	/**
	 * For Spring use.
	 */
	public Company() {
	}

	/**
	 * @param Company name
	 * @param Company password
	 * @param Company email *UNIQUE*
	 * @param Company coupons list
	 */
	public Company(String name, String password, String email) {
		super();
		this.name = name;
		this.password = password;
		this.email = email;
	}

//								**Getter,Setters**

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Coupon> getCoupons() {
		return coupons;
	}

	public void setCoupons(List<Coupon> coupons) {
		this.coupons = coupons;
	}

	public int getId() {
		return id;
	};

//	 ** Extra Methods**

	public void addCoupon(Coupon coupon) {
		this.coupons.add(coupon);
	}

	public void removeCoupon(Coupon coupon) {
		this.coupons.remove(coupon);
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", name=" + name + ", password=" + password + ", email=" + email + "]";
	}

//	**Printer**

}
