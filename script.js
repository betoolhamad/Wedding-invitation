const reminderButton =
  document.getElementById("reminderButton");

if (reminderButton) {
  reminderButton.addEventListener("click", () => {

    const eventTitle = "حفل الزواج";
    const location = "قاعة درة ليلتي - القصيم";

    const ics =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:wedding-20261026@example.com
DTSTAMP:20260913T190000Z
DTSTART;TZID=Asia/Riyadh:20261026T190000
DTEND;TZID=Asia/Riyadh:20261026T211500
SUMMARY:${eventTitle}
LOCATION:${location}
DESCRIPTION:دعوة لحضور حفل الزواج
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob(
      [ics],
      {
        type: "text/calendar;charset=utf-8"
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "wedding-reminder.ics";

    document.body.appendChild(link);

    link.click();

    link.remove();

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);


    

  });
}

// const logo = document.querySelector(".logo");

// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;

//   // ينزل لتحت مع السكرول
//   const moveY = Math.min(scrollY * 0.15, 35);

//   // يكبر تدريجيًا بشكل بسيط
//   const scale = Math.min(1 + scrollY * 0.0005, 1.12);

//   logo.style.transform =
//     `translateX(-50%) translateY(${moveY}px) scale(${scale})`;
// });