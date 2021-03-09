import webpush, { PushSubscription } from "web-push";
import UserSchema, { IUser } from "@schemas/UserSchema";
import readline from "readline";
import Application from "../application";
import Environment from "../environment";

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  Environment.pushNotification.public,
  Environment.pushNotification.private
);

Application.listen(Environment.port);
console.log("YOU ARE USING " + Environment.environment + " ENVIRONMENT, PORT: " + Environment.port);

const initialize = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const NotifyUsers = (): Promise<string> => {
    return new Promise((resolve) => {
      rl.question("Type the message you want to send: ", (answer) => {
        return resolve(answer);
      });
    });
  };

  const messageToNotifyUsers:string = await NotifyUsers();
  if (messageToNotifyUsers) {
    console.log("Please wait until message all users");

    const users:IUser[] = await UserSchema.find();
    users.forEach((user:IUser) => {
      const pushSubscription:PushSubscription = user.pushPermission ? JSON.parse(user.pushPermission) : null;
      if (pushSubscription) {
        webpush.sendNotification(pushSubscription, JSON.stringify({
          notification: {
            title: "Restaurant",
            icon: "img/icons/favicon-32x32.png",
            vibrate: [100, 50, 100],
            body: messageToNotifyUsers
          }
        }));
      }
    });

    console.log("All users notified");
  }

  rl.close();

  console.log("NOW YOU ARE READY TO RUN THE SERVER");
};

initialize();
