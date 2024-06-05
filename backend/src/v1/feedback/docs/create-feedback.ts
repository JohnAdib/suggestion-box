/**
 * @swagger
 * /v1/feedback:
 *   post:
 *     summary: Submit feedback
 *     description: Submit feedback to the system.
 *     tags:
 *       - Feedback
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateFeedback'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Feedback submitted successfully
 *       '400':
 *         description: Bad Request
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
 *                   example: Invalid input, please check your request
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

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateFeedback:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - type
 *         - title
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           format: email
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
 */
