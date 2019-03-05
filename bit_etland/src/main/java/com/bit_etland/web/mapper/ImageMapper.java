package com.bit_etland.web.mapper;

import java.util.List;

import com.bit_etland.web.domain.ImageDTO;
import com.bit_etland.web.proxy.Proxy;

public interface ImageMapper {
	public void insertImage(ImageDTO img);
	public List<ImageDTO> selectAllimageList(Proxy pxy);
	public List<ImageDTO> SelectImages(Proxy pxy);
	public ImageDTO selectImage(ImageDTO img);
	public String lastImageSeq();
	public int countImages(ImageDTO img);
	
	public void updateImage(Proxy pxy);
	public void deleteImage(Proxy pxy);
}
