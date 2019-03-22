package com.bit_etland.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bit_etland.web.service.SequenceService;

@Controller
@RequestMapping("/algo")
public class AlgoController {
	static final Logger logger = LoggerFactory.getLogger(AlgoController.class);
	@Autowired SequenceService seqservice;
	@Autowired Map<String, Object> map;
	@RequestMapping(value="/seq/{kind}",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> sequnce(@PathVariable String kind,
										@RequestBody Map<String, Object> param) {
		logger.info("\n --------- AlgoController  {} !! ----------","sequnce() 진입");
	
		System.out.println("넘어온 문제번호 "+kind);
		map = new HashMap<String, Object>();
		String start = (String)param.get("start");
		String end = (String)param.get("end");
		String diff = (String)param.get("diff");
		map.put("startNum", start);
		map.put("endNum", end);
		map.put("diff", diff);
		String result = "";//algoservice.arithmeticSequence(map);
		switch (kind) {
		case "ari":
			result = seqservice.arithmeticSequence(map);
			break;
		case "geo":
			result = seqservice.geometricSequence(map);
			break;
		case "fac":
			result = seqservice.factorialSequence(map);
			break;
		case "fibo":
			result = seqservice.fibonacciSequence(map);
			break;
			
		default:
			break;
		}
		map.put("result", result);
		return map;
	}
	/*
	 * {id:'ari', val:'등차수열의 합계'}, {id:'geo', val:'등비수열의 합계'}, {id:'fac',
	 * val:'팩토리수열의 합계'}, {id:'fibo', val:'파보나치수열의 합계'}
	 */
	
}
