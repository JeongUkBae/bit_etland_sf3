package com.bit_etland.web.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.ContextProxy;
import com.bit_etland.web.service.CustomerService;
import com.bit_etland.web.service.ImageService;

@SessionAttributes({"user","image"})
@Controller
@RequestMapping("/customer")
public class CustomerController {
	static final Logger logger = LoggerFactory.getLogger(CustomerController.class);	
	@Autowired CustomerDTO cust;
	@Autowired ImageDTO img;
	@Autowired CustomerService customerservice;
	@Autowired ImageService imageservice;
	@Autowired HttpSession session;
	@Autowired ContextProxy pxy;
	
	@RequestMapping(value = "/signin", method=RequestMethod.POST)
	public String signin(@ModelAttribute CustomerDTO param, HttpSession session) {
		logger.info("\n --------- MemberController {} !! ----------","signin");
		System.out.println("로그인 전 :"+cust.toString());
		cust = customerservice.retrieveCustomer(param);
		session.setAttribute("user", cust);
		System.out.println("로그인 후 결과 : "+cust.toString());
		
		String imgseq = cust.getPhoto();
		System.out.println("오너는?" + cust.getCustomerID());
		img.setImgSeq(imgseq);
		img = imageservice.searchImage(img);
		session.setAttribute("image", img);
		System.out.println("이미지  결과 : "+img.toString());
		
		return (cust != null) ? "customer:layouts/customer.tiles":"public:home/main.tiles";
	}
	@RequestMapping(value="/detail")
	public String detail(@RequestParam("customerID")String customerID, Model model) {
		logger.info("\n --------- MemberController {} !! ----------","update");
		cust.setCustomerID(customerID);
		cust = customerservice.retrieveCustomer(cust);
		model.addAttribute("cust", cust);

		return "customer:customer/contact.tiles";
	}
	
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String update(@ModelAttribute CustomerDTO param, Model session, 
							RedirectAttributes red) {
		logger.info("\n --------- MemberController {} !! ----------","update");
		customerservice.modifyCustomer(param);
		cust = customerservice.retrieveCustomer(cust);
		session.addAttribute("user", cust);
		red.addAttribute("customerID", param.getCustomerID());
		return "redirect:/customer/detail";
	}
}
