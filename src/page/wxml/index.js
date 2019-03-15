// page/wxml/index.js
const app = getApp()

Page({

  data: {
    xingming:"",
    number:"",
    school:"",
    telepone:""

  },

  formSubmit: function (e) {

    //console.log(e.detail.value);

    if (e.detail.value.xingming.length == 0) {

      wx.showToast({

        title: '姓名不能为空！',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        wx.hideToast()

      }, 2000)

    } else if (e.detail.value.number.length == 0) {

      wx.showToast({

        title: '学号不能为空!',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        wx.hideToast()

      }, 2000)

    } else if (e.detail.value.school.length == 0) {

      wx.showToast({

        title: '学校不能为空!',

        icon: 'loading',

        duration: 1500

      })

      setTimeout(function () {

        wx.hideToast()

      }, 2000)

    } else {

      wx.request({

        url: 'https://www.turing-cup.online/voteapp/activity/:id',

        header: {

          "Content-Type": "application/x-www-form-urlencoded"

        },

        method: "GET",

        data: { xingming: e.detail.value.xingming, number: e.detail.value.number, school: e.detail.value.school },

        success: function (res) {

          console.log(res.data);

          if (res.data.status == 0) {

            wx.showToast({

              title: '提交失败！！！',

              icon: 'loading',

              duration: 1500

            })

          } else {

            wx.showToast({

              title: '提交成功！！！',

              icon: 'success',

              duration: 1000

            })

          }

        }

      })

    }

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})