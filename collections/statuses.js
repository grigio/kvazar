/**
 * если задача типа Task
 *  new - добавлена но не подтверждена, например при добавлении в багтрекер
 *  approved - подтвержена, но не в работе и не назначена. При добавлении менеджером новой задачи, сразу становится в этот статус
 *  in_focus - назначена, установленно кол-во баллов и поставлена в итерацию
 *  started - начата разработка
 *  paused - в разработке, но стоит на паузе
 *  finished - закончена разработка,но еще не внедрена
 *  complete - завершена и внедрена
 *  closed - отклонена, т.к. не актуальна, дубликат и тп
 *
 *  если задача типа Epic
 *  new
 *  approved
 *  started - ставится автоматом, если подчиненные задачи в разработки
 *  paused - ставится автоматом, если подчиненные задачи на паузе
 *  finished - закончена разработка, но еще не внедрена
 *  complete - завершена и внедрена
 *  closed - отклонена, т.к. не актуальна, дубликат и тп
 *
 *
 *
 * @type {Meteor.Collection2}
 */

Statuses = new Meteor.Collection2("statuses", {

    schema: {
        title: {
            type: String,
            label: "Title"

        },

        code: {
            type: String

        }
    }
});


Meteor.methods({

});