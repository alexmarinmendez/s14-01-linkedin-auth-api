import { Router } from 'express'
import { Authorization, Redirect } from '../helpers/authHelper.js'

const router = Router()

router.get('/authorize', (req, res) => res.redirect(Authorization()))
router.get('/redirect', async (req, res) => {
    const response = await Redirect(req.query.code)
    if (!response) return res.json({ status: 'error', payload: req.query.error_description })
    res.json({ status: 'success', payload: response })
})

export default router