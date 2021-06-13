// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
//import EditIcon from 'part:@sanity/base/edit-icon'
import { FiSettings, FiHome, FiTruck, FiTv, FiUser, FiDollarSign, FiBook } from 'react-icons/fi'
//import SeoPreview from './components/previews/seo/seo-preview'
export default () =>
  S.list()
    .title('EPR Website')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
          .title('Settings')
          .items([
            S.listItem()
              .title('General')
              .child(
                S.editor()
                  .id('generalSettings')
                  .getSchemaType('generalSettings')
              )
              .icon(FiSettings),
              S.listItem()
              .title('Cookie Consent')
              .child(
                S.editor()
                  .id('cookieSettings')
                  .schemaType('cookieSettings')
                  .documentId('cookieSettings')
              )
          ])
        )
        .icon(FiSettings),
        S.divider(),
      S.listItem()
        .title('Home')
        .child(
              
        )
        .icon(FiHome),
          S.divider(),
      S.listItem()
        .title('Race')
        .child(
          S.list()
          .title('Race')
          .items([

          ])
        )
         .icon(FiTruck),
      S.listItem()
      .title('News')
      .child(
        S.list()
        .title('News')
        .items([
          S.listItem()
            .title('Post')
            .schemaType('post')
            .child(S.documentTypeList('post').title('Post'))
            .icon(FiTv),           
          S.divider(),
            S.listItem()
            .title('Author')
            .schemaType('author')
            .child(S.documentTypeList('author').title('Author'))
            .icon(FiBook),
            S.listItem()
            .title('Category')
            .schemaType('category')
            .child(S.documentTypeList('category').title('Category'))
        ])
      )
        .icon(FiTv),
      S.listItem()
      .title('About')
      .child(
        S.list()
        .title('about')
        .items([
          S.listItem()
            .title('About Post')
            .schemaType('aboutPost')
            .child(S.documentTypeList('aboutPost').title('About Block'))
            .icon(FiUser)
        ])
      )
      .icon(FiUser),
      S.divider(),
      S.listItem()
      .title('Partners')
      .child(
        S.list()
        .title('sponsors')
        .items([
          S.listItem()
            .title('Sponsor Post')
            .schemaType('sponsorPost')
            .child(S.documentTypeList('sponsorPost').title('Sponsor Post'))
            .icon(FiDollarSign)
        ])
      )
      .icon(FiDollarSign),
      ...S.documentTypeListItems().filter(item => !['aboutPost', 'post', 'author', 'category', 'generalSettings', 'sponsorPost'].includes(item.getId()))

        ])
      