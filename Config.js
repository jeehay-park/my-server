const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
    header: {
      trId: { type: String, required: true },
      rtnCode: { type: String, required: true },
      rtnMessage: { type: String, required: true },
    },
    body: {
      totCnt: { type: Number, required: true },
      headerInfos: [
        {
          idx: { type: Number, required: true },
          keyName: { type: String, required: true },
          name: { type: String, required: true },
          isSort: { type: Boolean, required: true },
          isFilter: { type: Boolean, required: true },
          isDisplay: { type: Boolean, required: true },
        },
      ],
      configList: [
        {
          fileName: { type: String, required: true },
          type: { type: String, required: true },
          version: { type: String, required: true },
          hash: { type: String, default: null }, // hash is nullable
          fileData: { type: String, required: true },
          download: { type: String, required: true },
        },
      ],
    },
  });

const Config = mongoose.model('Config', configSchema);

module.exports = Config;
