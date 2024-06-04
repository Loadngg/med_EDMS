from django.db import models


class Cabinet(models.Model):
    """Кабинет"""

    floor = models.IntegerField("Этаж", blank=False)
    number = models.IntegerField("Номер", blank=False)

    def __str__(self):
        return f"Этаж {self.floor} - Номер: {self.number}"

    class Meta:
        verbose_name = "Кабинет"
        verbose_name_plural = "Кабинеты"


class Profile(models.Model):
    """Направление (хирург, терапевт и т.д)"""

    name = models.CharField("Название", unique=True, blank=False, max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Направление"
        verbose_name_plural = "Направления"


class Doctor(models.Model):
    """Врач"""

    full_name = models.CharField("ФИО", blank=False, max_length=100)
    reception_time_start = models.TimeField("Время начала рабочего дня", blank=False)
    reception_time_end = models.TimeField("Время окончания рабочего дня", blank=False)
    image = models.ImageField("Изображение", upload_to="doctor/", blank=True, default='/blank.jpg')
    cabinet = models.ForeignKey(Cabinet, verbose_name="Кабинет", on_delete=models.SET_NULL, null=True, blank=True)
    profile = models.ForeignKey(Profile, verbose_name="Направление", on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Врач"
        verbose_name_plural = "Врачи"


class Client(models.Model):
    """Клиент"""

    full_name = models.CharField("ФИО", blank=False, max_length=100)
    birth_date = models.DateField("Дата рождения", blank=False)
    id_card = models.CharField("СНИЛС", blank=False, max_length=11)
    policy = models.CharField("Полис", blank=False, max_length=16)

    def __str__(self):
        return self.full_name

    class Meta:
        verbose_name = "Клиент"
        verbose_name_plural = "Клиенты"


class Reason(models.Model):
    """Причина приёма"""

    title = models.CharField("Причина приёма", blank=False, max_length=100, unique=True)
    urgency = models.FloatField("Коэффициент срочности", blank=False)
    no_waiting = models.BooleanField("Без очереди", default=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Причина приёма"
        verbose_name_plural = "Причины приёма"


class Reception(models.Model):
    """Приём"""

    reception_time_start = models.TimeField("Начало приёма", blank=False)
    reception_time_end = models.TimeField("Конец приёма", blank=False)
    doctor = models.ForeignKey(Doctor, verbose_name="Врач", on_delete=models.SET_NULL, null=True, blank=True)
    client = models.ForeignKey(Client, verbose_name="Клиент", on_delete=models.SET_NULL, null=True, blank=True)
    reason = models.ForeignKey(Reason, verbose_name="Причина приёма", on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Время: {self.reception_time_start} - {self.reception_time_end}"

    class Meta:
        verbose_name = "Приём"
        verbose_name_plural = "Приёмы"
