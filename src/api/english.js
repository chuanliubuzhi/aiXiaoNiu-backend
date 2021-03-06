import request from '@/utils/request'

//显示所有文章
export function articleIndex(data) {
  return request({
    url: '/Encms/article/index',
    method: 'post',
    data
  })
}

//分类显示文章
export function articleIndexByCat(params) {
  return request({
    url: '/Encms/article/indexbycat',
    method: 'get',
    params
  })  
}

//文章详情
export function articleView(id) {
  return request({
    url: '/Encms/article/view',
    method: 'get',
    params: {
    	'articleid': id
    }
  })
}

//添加文章
export function articleCreate(data) {
  return request({
    url: '/Encms/article/create',
    method: 'post',
    data
  })
}

//修改文章
export function articleUpdate(data) {
  return request({
    url: '/Encms/article/update',
    method: 'post',
    data
  })
}

//删除文章
export function articleDelete(id) {
  return request({
    url: '/Encms/article/delete',
    method: 'post',
    data: {
    	'id': id
    }
  })
}


//查看文章分类
export function articleCategoryIndex() {
  return request({
    url: '/Encms/articlecategory/index',
    method: 'get'
  })
}

//查看文章分类（树形结构）
export function articleCategoryIndexTree(data) {
  return request({
    url: '/Encms/articlecategory/showall',
    method: 'post'
  })
}

//根据父ID查看文章分类
export function articleCategoryIndexWithPid(pid) {
  return request({
    url: '/Encms/articlecategory/indexwithpid',
    method: 'get',
    params: {
    	'parentid': pid
    }
  })
}

//创建文章分类
export function articleCategoryCreate(data) {
  return request({
    url: '/Encms/articlecategory/create',
    method: 'post',
    data
  })
}

//修改文章分类
export function articleCategoryUpdate(data) {
  return request({
    url: '/Encms/articlecategory/update',
    method: 'post',
    data
  })
}

//删除文章分类
export function articleCategoryDelete(data) {
  return request({
    url: '/Encms/articlecategory/delete',
    method: 'post',
    data
  })
}

//面包屑导航
export function articleCategoryShowAllParent(data) {
  return request({
    url: '/Encms/articlecategory/showallparent',
    method: 'post',
    data
  })
}