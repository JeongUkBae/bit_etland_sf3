package com.bit_etland.web.domain;

import lombok.Data;

@Data
public class CustomerDTO {
	private String  customerID, customerName, password, ssn, phone,
					photo, city, address, postalcode, count ;

}
