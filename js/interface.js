// promise封装ajax,整合接口

function request(url, params, type = 'GET') {
    return new Promise(
        function (resolve, reject) {
            $.ajax({
                type,
                url,
                data: params,
                dataType: 'JSON',
                success(res) {
                    resolve(res)
                },
                error(err) {
                    reject(err)
                }
            })
        }
    )
}

const searchGoodsOrderLimit = (params = {}) => request('../php/searchGoodsOrderLimit.php', params)

const searchGoodsOrderLimitCy = (params = {}) => request('php/searchGoodsOrderLimit.php', params)

const searchGoodsByVersion = (params = {}) => request('../php/searchGoodsByVersion.php', params)

const searchGoodsById = (params = {}) => request('../php/searchGoodsById.php', params)

const joinCarL = (params = {}) => request('../php/joinCarL.php', params, 'POST')

const searchGoodsByUser = (params = {}) => request('../php/searchGoodsByUser.php', params, 'POST')

const searchGoodsByUserC = (params = {}) => request('php/searchGoodsByUser.php', params, 'POST')

const deleteGoods = (params = {}) => request('../php/deleteGoods.php', params, 'POST')

const updateGoodsNum = (params = {}) => request('../php/updateGoodsNum.php', params, 'POST')