/**
 * @swagger
 * components:
 *   schemas:
 *     FeedbackItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: abc123
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           example: johndoe@example.com
 *         type:
 *           type: string
 *           enum:
 *             - suggestion
 *             - bug
 *             - complaint
 *           example: suggestion
 *         title:
 *           type: string
 *           example: Issue with the login page
 *         message:
 *           type: string
 *           example: Whenever I try to log in, I get an error message.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2024-06-01T12:00:00Z
 *
 *     GetFeedbackResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/FeedbackItem'
 */

/**
 * @swagger
 * /v1/feedback:
 *   get:
 *     summary: Get feedback
 *     description: Retrieve a list of feedback submissions.
 *     tags:
 *       - Feedback
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetFeedbackResponse'
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal server error, please try again later
 */