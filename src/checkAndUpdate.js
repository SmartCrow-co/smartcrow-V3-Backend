"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAndUpdate = void 0;
const checkDeadline_1 = require("./checkDeadline");
const checkSalesConditions_1 = require("./checkSalesConditions");
const readBonusInfo_1 = require("./readBonusInfo");
const updateBonusInfo_1 = require("./updateBonusInfo");
function checkAndUpdate(sender, receiver, propertyNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Running Check and Update ...");
            const myArray = yield (0, readBonusInfo_1.readBonusInfo)(sender, receiver, propertyNumber);
            const stringArray = myArray.map((value) => String(value));
            // // Check to update propertySold and meetSalesCondition
            const meetSalesCondition = yield (0, checkSalesConditions_1.checkSalesConditions)(stringArray, propertyNumber);
            console.log("Meet Sales Condition", meetSalesCondition);
            // // Check to update postDeadlineCheck
            const endDate = parseInt(stringArray[4], 10);
            const minRequestDays = parseInt(stringArray[6]);
            const deadlineChecker = yield (0, checkDeadline_1.checkDeadline)(endDate, minRequestDays);
            const postDeadlineCheck = deadlineChecker === true ? 1 : 2;
            // // Update Final Values
            if (meetSalesCondition.condition) {
                yield (0, updateBonusInfo_1.updateContract)(sender, receiver, propertyNumber, 1, postDeadlineCheck);
            }
            else {
                yield (0, updateBonusInfo_1.updateContract)(sender, receiver, propertyNumber, 2, postDeadlineCheck);
            }
            return { meetSalesCondition, postDeadlineCheck };
        }
        catch (error) {
            throw new Error('Error fetching property information: ' + error.message);
        }
    });
}
exports.checkAndUpdate = checkAndUpdate;
