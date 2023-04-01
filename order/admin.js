const express = require('express')
const router = express.Router()
const conn = require('../js/conn')
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
const nodemailer = require("nodemailer");
const { nanoid } = require('nanoid')
/**
 * userEmail: 自己的 QQ 邮箱
 * userCode： 自己的 QQ 邮箱授权码
 */
const userEmail = '*****@qq.com'
const userCode = '*****'
// 管理员获取借阅记录接口
router.post('/borrowslist', (req, res) => {
	conn.query(`select * from borrowinfo`, (err, rs) => {
		let data = rs || []
		if (data.length == 0)
			res.json({
				msg: '管理员请求借阅记录为空',
				status: 0,
				data: rs
			})
		else
			res.json({
				msg: '管理员请求借阅记录成功',
				status: 200,
				data: data
			})
	})
})
// 管理员获取举报记录接口
router.post('/initreportlist', (req, res) => {
	conn.query(`select b.email,status,commentId,reporterId,
    	reportdate,a.readerId,a.readerName,bookId,bookName,
	date,content,b.readerName as reporterName from reportInfo a left join reader b 
	on a.reporterId=b.readerId`, (err, rs) => {
		let data = rs || []
		if (data.length == 0)
			res.json({
				msg: '管理员请求举报记录为空',
				status: 0,
				data: rs
			})
		else
			res.json({
				msg: '管理员请求举报记录成功',
				status: 200,
				data: data
			})
	})
})
// 管理员获取预订记录接口
router.post('/reservelist', (req, res) => {
	conn.query(`select reader.readerId,book.bookId,readerName,bookName,date from reserve 
    	left join reader on reserve.readerId=reader.readerId 
    	left join book on reserve.bookId=book.bookId`, (err, rs) => {
		let data = rs || []
		if (data.length == 0)
			res.json({
				msg: '管理员请求预订记录为空',
				status: 0,
			})
		else
			res.json({
				msg: '管理员请求预订记录成功',
				status: 200,
				data: rs
			})

	})
})
// 管理员删除借阅记录接口
router.post('/deleteborrow', (req, res) => {
	let data = req.body
	conn.query(`delete from borrow where readerId='${data.readerId}' 
    	and bookId='${data.bookId}' and borrowDate='${data.borrowDate}'`)
	res.json({
		msg: '管理员删除借阅记录成功',
		status: 200,
	})
})
// 管理员通过名称查询借阅信息
router.post('/searchborrow', (req, res) => {
	let data = req.body;
	conn.query(`select * from borrowinfo where borrowinfo.readerName='${data.info}'`, (err, reader) => {
		reader = reader || []
		conn.query(`select * from borrowinfo where borrowinfo.bookName like '%${data.info}%'`, (err, book) => {
			book = book || []
			const data = [...new Set(reader.concat(book))]
			if (data.length > 0) {
				res.json({
					msg: '查询成功！',
					status: 200,
					data: data
				})
			} else {
				res.json({
					msg: '查询失败！',
					status: 0
				})
			}

		})
	})
})

// 人员管理
// 管理员获取人员信息
router.post('/initreaderlist', (req, res) => {
	conn.query(`select * from reader`, (err, rs) => {
		let data = rs || []
		if (data.length == 0)
			res.json({
				msg: '管理员请求人员记录为空',
				status: 0,
			})
		else
			res.json({
				msg: '管理员请求人员记录成功',
				status: 200,
				data: data
			})

	})
})
// 管理员删除人员信息
router.post('/delperson', (req, res) => {
	let data = req.body;
	conn.query(`delete from reader where readerId='${data.readerId}'`)
	res.send({
		msg: '删除人员成功！',
		status: 200
	})
})

// 图书管理
// 管理员添加图书
router.post('/adminaddbooks', (req, res) => {
	let data = req.body
	conn.query(`select * from book where position = '${data.position}'`, (err, rs) => {
		if (rs.length > 0) {
			res.send({
				msg: '该位置已有书籍存放！',
				status: 0
			})
		} else {
			conn.query(`insert into book values('${nanoid()}','${data.bookName}','${data.author}','${data.amount}','${data.position}','${data.amount}',0,1)`)
			res.send({
				msg: '添加书籍成功！',
				status: 200
			})
		}
	})
})
// 管理员修改图书信息
router.post('/changebookinfo', (req, res) => {
	let data = req.body
	let status = data.status
	switch (status) {
		case '1': {
			// 修改书名
			conn.query(`update book set bookName='${data.value}' where bookId='${data.bookId}'`)
			res.send({
				status: 200,
				msg: '修改书名成功！'
			})
			break;
		}
		case '2': {
			// 修改作者
			conn.query(`update book set author='${data.value}' where bookId='${data.bookId}'`)
			res.send({
				status: 200,
				msg: '修改作者成功！'
			})
			break;
		}
		case '3': {
			// 修改位置
			conn.query(`select * from book where position = '${data.value}'`, (err, rs) => {
				if (rs.length > 0) {
					return res.send({
						msg: '该位置已有书籍存放！',
						status: 0
					})
				} else {
					conn.query(`update book set position='${data.value}' where bookId='${data.bookId}'`)
					res.send({
						status: 200,
						msg: '修改位置成功！'
					})
				}
			})
			break;
		}
		case '4': {
			// 修改当前库存
			conn.query(`update book set amount='${data.value}' where bookId='${data.bookId}'`)
			// 修改总库存
			conn.query(`update book set totalAmount=totalAmount + '${data.difference}' where bookId='${data.bookId}'`)
			res.send({
				status: 200,
				msg: '修改当前库存成功！'
			})
			break;
		}
		default: break;
	}
})
// 管理删除图书
router.post('/delbook', (req, res) => {
	let data = req.body
	conn.query(`update book set status=0 where bookId='${data.bookId}'`)
	res.send({
		msg: '删除图书成功',
		status: 200
	})
})
// 管理提醒用户还书
router.post('/alertperson', (req, res) => {
	let data = req.body
	conn.query(`select email from reader where readerId='${data.readerId}'`, (err, rs) => {
		console.log('rs:', rs);
		var email = rs[0].email
		let transporter = nodemailer.createTransport({
			service: 'qq',
			port: 465,
			secure: true,
			auth: {
				user: userEmail, // QQ邮箱
				pass: userCode	// 授权码
			},
		});
		let mailobj = {
			from: userEmail, // 发送者QQ邮箱
			to: `${email}`, // 接收者QQ邮箱
			subject: "举报反馈", 
			text: `读者您好，请尽快归还书籍:${data.bookName}！`, // plain text body [与 html 只能有一个]
			//html: "<b>Hello world?</b>" // html body
		}
		transporter.sendMail(mailobj, (err, data) => {
			console.log(data);
		});

		res.send({
			msg: '发送成功！',
			status: 200
		})
	})

})

// 管理员审核举报接口
router.post('/auditcomment', (req, res) => {
	let data = req.body
	let transporter = nodemailer.createTransport({
		service: 'qq',
		port: 465,
		secure: true,
		auth: {
			user: userEmail, // QQ邮箱
			pass: userCode, // 授权码
		},
	});
	//   管理员自行删除评论
	if (data.status == 3) {
		conn.query(`update comment set status=0 where readerId='${data.readerId}' and bookId='${data.bookId}' and date='${data.date}'`)
		res.send({
			msg: '删评成功！',
			status: 200
		})
	}
	//  删评
	else if (data.status == 0) {
		conn.query(`update comment set status=0 where readerId='${data.readerId}' and bookId='${data.bookId}' and date='${data.date}'`)
		conn.query(`update report set status='已通过' where commentId='${data.commentId}' and reporterId='${data.reporterId}' and reportdate='${data.reportdate}'`)
		// 邮件信息
		let mailobj = {
			from: userEmail, // 发送者QQ邮箱
			to: `${data.email}`, // 接收者QQ邮箱
			subject: "举报成功！", 
			text: "我们已经对该用户的不良行为进行处理，感谢您对社区做出的贡献！", // plain text body [与 html 只能有一个]
			//html: "<b>Hello world?</b>" // html body
		}
		transporter.sendMail(mailobj, (err, data) => {
			console.log(data);
		});
		conn.query(`select email from reader where readerId='${data.readerId}'`, (err, rs) => {
			if (err) throw err;
			rs = rs || []
			if (rs.length > 0) {
				var email = rs[0].email;
				var mailobj2 = {
					from: userEmail, // 发送者QQ邮箱
					to: `${email}`, // 接收者QQ邮箱
					subject: "警告！", // Subject line
					text: "我们收到用户对您的举报，希望您能遵守秩序，文明用语！", // plain text body [与 html 只能有一个]
					//html: "<b>Hello world?</b>" // html body
				}
				transporter.sendMail(mailobj2, (err, data) => {
					console.log(data);
				});
			}
		})
		res.send({
			msg: '删评成功！',
			status: 200
		})
		// 驳回
	} else if (data.status == 1) {
		conn.query(`update report set status='已驳回' where commentId='${data.commentId}' and reporterId='${data.reporterId}' and reportdate='${data.reportdate}'`)
		// 邮件信息
		let mailobj = {
			from: userEmail, // 发送者 QQ 邮箱
			to: `${data.email}`, // 接收者 QQ 邮箱
			subject: "举报反馈", // Subject line
			text: "我们暂无检测到该用户的不良行为，感谢您为保护社区环境做出的贡献！", // plain text body [与 html 只能有一个]
			//html: "<b>Hello world?</b>" // html body
		}
		transporter.sendMail(mailobj, (err, data) => {
			console.log(data);
		});


		res.send({
			msg: '驳回成功！',
			status: 200
		})
	}
})
module.exports = router