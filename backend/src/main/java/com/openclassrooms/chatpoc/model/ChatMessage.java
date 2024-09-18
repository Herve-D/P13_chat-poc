package com.openclassrooms.chatpoc.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChatMessage {

	private String username;
	private String text;
	private Date time;

}
