package ecoswaa.notificationsE.controller;

import ecoswaa.notificationsE.model.Notification; // Import your custom Notification class
import ecoswaa.notificationsE.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping("/add")
    public String add(@RequestBody Notification notification) {
        notificationService.saveNotification(notification); // Invoke saveNotification() on the service
        return "New notification is added";
    }
    @GetMapping("/getAll")
    public List<Notification>getAllNotifications(){
        return notificationService.getAllNotification();
    }
}
