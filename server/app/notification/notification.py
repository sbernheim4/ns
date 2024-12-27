class Notification:

    def send_notification(self):
        print("IMPLEMENT")

class SlackNotification(Notification):

    def send_notification(self):
        print("Sending slack message")
