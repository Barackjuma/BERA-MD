module.exports = async (context) => {
  try {
    const { client, m, botname, dev } = context;

    // Create a vCard with the bot's name and the owner's WhatsApp number
    const vcard = 
      `BEGIN:VCARD\n` +
      `VERSION:3.0\n` +
      `FN:${botname}\n` +  // 𝐁𝐚𝐫𝐚𝐜𝐤 𝐎𝐛𝐚𝐦𝐚
      `TEL;type=CELL;type=VOICE;waid=${dev}:+${dev}\n` +  // https://wa.me/+254717261760
      `END:VCARD`;

    // Send the contact card to the chat
    await client.sendMessage(m.chat, {
      contacts: {
        displayName: botname,
        contacts: [{ vcard }],
      },
    }, { quoted: m });
  } catch (error) {
    console.error("Error sending contact card:", error);
  }
};

