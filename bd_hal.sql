/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     31/05/2020 17:40:51                          */
/*==============================================================*/


drop table if exists AFFILIE;

drop table if exists AUTEURS;

drop table if exists AVOIR;

drop table if exists LABORATOIRE;

drop table if exists PUBLICATION;

/*==============================================================*/
/* Table: AFFILIE                                               */
/*==============================================================*/
create table AFFILIE
(
   ID_AUTHEUR           Integer,
    ID_LAB               Integer
);

/*==============================================================*/
/* Table: AUTEURS                                               */
/*==============================================================*/
create table AUTEURS
(
   ID_AUTHEUR           Integer not null primary key,
   NOM                  varchar(100),
   PRENOM               varchar(100),
   ADRESSE             varchar(100)
);

/*==============================================================*/
/* Table: AVOIR                                                 */
/*==============================================================*/
create table AVOIR
(
   ID_AUTHEUR           Integer,
   DOC_ID                Integer
);

/*==============================================================*/
/* Table: LABORATOIRE                                           */
/*==============================================================*/
create table LABORATOIRE
(
   ID_LAB               Integer not null primary key,
   NOM                  varchar(100)
);

/*==============================================================*/
/* Table: PUBLICATION                                           */
/*==============================================================*/
create table PUBLICATION
(
   DOC_ID               integer not null primary key,
   TITRE                varchar(100),
   TYPE_PUB             varchar(100),
   LIEN                 varchar(100),
   DATEPUB              date
);

alter table AFFILIE add constraint FK_AFFILIE foreign key ( ID_LAB)
      references LABORATOIRE( ID_LAB) on delete restrict on update restrict;

alter table AFFILIE add constraint FK_AFFILIE2 foreign key (ID_AUTHEUR)
      references AUTEURS(ID_AUTHEUR) on delete restrict on update restrict;

alter table AVOIR add constraint FK_AVOIR1 foreign key (ID_AUTHEUR)
      references AUTEURS(ID_AUTHEUR) on delete restrict on update restrict;

alter table AVOIR add constraint FK_AVOIR2 foreign key (DOC_ID)
      references PUBLICATION(DOC_ID) on delete restrict on update restrict;

alter table AVOIR add constraint PK_AVOIR primary key (ID_AUTHEUR,DOC_ID);
alter table AVOIR add constraint PK_AVOIR primary key (ID_AUTHEUR,ID_LAB)