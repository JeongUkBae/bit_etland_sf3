package com.bit_etland.web.service;

import java.util.Map;
import org.springframework.stereotype.Service;

@Service
public class AlgoServiceImpl implements AlgoService{

	/*
	 * String startNum = "1"; String endNum = "100"; String diff = "1";
	 */
	
	@Override
	public String arithmeticSequence(Map<?, ?> param) {
		String startNum = (String)param.get("startNum"),
				endNum = (String)param.get("endNum"),
				diff = (String)param.get("diff"),
				result = "";
		int A = Integer.parseInt(startNum); //첫번째
		int E = Integer.parseInt(endNum); // 마지막번째
		int D = Integer.parseInt(diff); // 공차
		int S = A; 
		int N = 2; // 항의 순서
		int AN= 0;
		while(true) {
			AN = A + (N-1) * D;
			S = S + AN;
			N = N + 1;
			if(N > E) break;
		}
		result = String.valueOf(S);
		return result;
	}

}
