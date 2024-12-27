from app.notification import Notification
import os
from slack_sdk import WebClient

class SlackNotification(Notification):

    def __init__(self):
        slack_token = os.environ["SLACK_TOKEN"]
        client = WebClient(token=slack_token)

    def send_notification(self, message: str, channel: str):
        self.client.chat_postMessage(
            channel="Bot Update",
            text=message,
            username="Notification Service"
        )
