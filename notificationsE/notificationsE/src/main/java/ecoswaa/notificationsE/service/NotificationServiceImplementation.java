package ecoswaa.notificationsE.service;

import ecoswaa.notificationsE.model.Notification;
import ecoswaa.notificationsE.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationServiceImplementation implements NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public Notification saveNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public List<Notification> getAllNotification() {
        return notificationRepository.findAll();
    }
}
