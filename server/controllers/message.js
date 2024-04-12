import Conversation from "../db/models/CONVERSATION.js";
import Message from "../db/models/MESSAGE.js";

export async function sendMessage(req, res) {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    ``;
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (err) {
    console.log("sendMessage error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMessage(req, res) {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(201).json(messages);
  } catch (err) {
    console.log("getMessage error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
