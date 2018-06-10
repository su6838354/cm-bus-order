/**
 * Created by pdd on 2018/6/10.
 */


import Router from 'koa-router'
import cboCtrl from '../controllers/cboCtrl'

const router = Router()

/**
 * 登录
 *
 *
 *
 */
router.post('/addOrder', cboCtrl.addOrder)

router.post('/sendCode', cboCtrl.sendCode)

router.post('/login', cboCtrl.login)

router.post('/list_search', cboCtrl.list_search)

router.post('/list_by_mobile', cboCtrl.list_by_mobile)


export default router