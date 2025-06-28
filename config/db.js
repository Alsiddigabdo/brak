const mysql = require('mysql2');
const util = require('util');
require('dotenv').config(); // تحميل المتغيرات من .env

// إعداد الاتصال بقاعدة البيانات باستخدام البيانات المقدمة
const db = mysql.createConnection({
  host: 'sql.freedb.tech',
  user: 'freedb_textai',
  password: 'j?SB9P9gytSk3*V',
  database: 'freedb_textai',
  port: 3306 // هذا هو المنفذ الافتراضي لـ MySQL، لا تغيّره إلا لو تم تحديد غيره
});

db.connect((err) => {
  if (err) {
    console.error("❌ لم يتم الاتصال بقاعدة البيانات:", err);
    return;
  }
  console.log("✅ تم الاتصال بقاعدة البيانات بنجاح");
});

// تحويل db.query إلى Promise حتى يعمل مع async/await
db.query = util.promisify(db.query);

module.exports = db;
