package ecoswaa.notificationsE.service;

import ecoswaa.notificationsE.model.Notification;

import java.util.List;

public interface NotificationService {
    public Notification saveNotification (Notification notification);
    public List<Notification> getAllNotification();
}
