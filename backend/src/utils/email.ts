import { config } from "../configs/config";
import { Resend } from "resend";

const resend = new Resend(config.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, url: string) => {
    try {
        const {data, error} = await resend.emails.send({
            from: 'NexusGames <onboarding@resend.dev>',
            to: [email],
            subject: "Email verification",
            html: `
                <div style="
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border-radius: 8px;
                    padding: 32px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                    color: #1f2937;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
                ">
                    <h2 style="
                        margin: 0 0 16px 0;
                        font-size: 24px;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                        text-align: center;
                    ">
                        WELCOME TO NEXUS GAMES
                    </h2>

                    <p style="
                        font-size: 16px;
                        line-height: 1.6;
                        margin: 0 0 24px 0;
                        text-align: center;
                        color: #374151;
                    ">
                        Thank you for registering!  
                        Please verify your email address to complete your account setup.
                    </p>

                    <div style="text-align: center; margin: 32px 0;">
                        <a href="${url}" style="
                            display: inline-block;
                            background-color: #111827;
                            color: #ffffff;
                            padding: 14px 32px;
                            font-size: 16px;
                            font-weight: 600;
                            text-decoration: none;
                            border-radius: 6px;
                        ">
                            Verify Email
                        </a>
                    </div>

                    <p style="
                        font-size: 14px;
                        line-height: 1.6;
                        color: #6b7280;
                        text-align: center;
                        margin: 0 0 24px 0;
                    ">
                        This verification link will expire in <strong>24 hours</strong>.
                        If you did not request this, you can safely ignore this email.
                    </p>

                    <hr style="
                        border: none;
                        border-top: 1px solid #e5e7eb;
                        margin: 24px 0;
                    " />

                    <p style="
                        font-size: 12px;
                        color: #9ca3af;
                        text-align: center;
                        margin: 0;
                    ">
                        © 2026 Nexus Games. All rights reserved.
                    </p>
                </div>
            `,
        });
        if (error) {
            console.log(error.message);
        }

        return {data};
    } catch (err: any) {
        console.log("Error when sending verification email", err.message);
        throw err;
    }
}