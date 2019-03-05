package com.bit_etland.web.domain;

import lombok.Data;

@Data
public  class OrderDetailDTO {
	private String orderDetailID, orderId, productId,
	quantity;

}
