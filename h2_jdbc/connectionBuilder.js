(function dsbuilder(attr) {
    var urlBuilder = "jdbc:h2:tcp://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase];

    return [urlBuilder];
})
