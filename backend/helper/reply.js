// helper/reply.js
export const replyModule = (usermail) => {
    return `
    <table align="center" cellpadding="10" cellspacing="0" style="background-color:#0F0715; color:#FFFFFF; width: 600px; font-family: Arial, sans-serif;">
      <tbody>
        <tr>
          <td>
            <h1 style="text-align: center;">Welcome to My Web Development Services!</h1>
            <p style="font-size: 16px; color:#FFFFFF;">Dear ${usermail}</p>
            <p>I’m Nikhil, a web developer, and I wanted to personally thank you for reaching out.</p>
            <p>Here’s what you can expect:</p>
            <ul>
              <li>Professional and responsive web development</li>
              <li>Tailored solutions to meet your needs</li>
              <li>Reliable communication and support</li>
            </ul>
            <a href="https://nikhil.my" style="display: inline-block; background-color: #8750F7; color: #FFFFFF; padding: 10px 20px; text-decoration: none; border-radius: 5px;">My Site</a>
            <p style="font-size: 12px; margin-top: 20px;">If you have any questions or need assistance,feel free to get in touch.</p>
            <p>Thanks for connecting!</p>
            <p style="color:#8750F7 ">Nikhil Kohli</p>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};
