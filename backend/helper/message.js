
export const messagesModule = (usermail, username, subject, text) => {
    return `
    <table align="center" cellpadding="10" cellspacing="0" style="background-color:#0F0715; color:#FFFFFF; width: 600px; font-family: Arial, sans-serif;">
      <tbody>
        <tr>
          <td>
            <h1 style="text-align: center;">Message From ${usermail}</h1>
            <p style="font-size: 16px; color:#FFFFFF;">Hi i'm ${username}</p>
            <p>Subject : ${subject}</p>
           
            <h3 style="font-size: 12px; margin-top: 20px;">Dear, Nikhil Kohli</h3>
            
            <p>${text}</p>
            
            <p>Thank You</p>
            <p style="color:#8750F7 ">${username}</p>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};
