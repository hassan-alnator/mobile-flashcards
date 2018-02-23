import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'

const NOTIFICATION_KEY = 'flashcards:notifications'

function createNotification() {
    return {
        title: 'Take a Quiz!',
        body: "👋 dont for get to take your quiz today!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification(when = "today") {

    AsyncStorage
        .getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {

            if (data === null) {
                Permissions
                    .askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let time = new Date()

                            time.setDate(when === "today"
                                ? time.getDate()
                                : time.getDate() + 1)

                            time.setHours(12)
                            time.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(createNotification(), {
                                time: time,
                                repeat: 'day'
                            })

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}
