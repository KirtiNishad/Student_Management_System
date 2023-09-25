var express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/teacherLogin',teacherController.teacher_login_get);
router.post('/teacherLogin',teacherController.teacher_login_post);
router.get('/teacherViewall',teacherController.teacher_viewall_get);
router.get('/teacherEdit/:id',teacherController.teacher_edit_get);
router.post('/teacherEdit/:id',teacherController.teacher_edit_post);
router.get('/teacherDelete/:id',teacherController.teacher_delete_get);
router.get('/teacherOption',teacherController.teacher_option_get);
router.post('/teacherAdd',teacherController.teacher_add_post);
router.get('/teacherAdd',teacherController.teacher_add_get);

module.exports = router;