import { RESERVE_RATIO, MAX_BLOCK_SIZE, BANDWIDTH_PERIOD, MAX_CELLULOSE } from '../constants';

const NETWORK_BANDWIDTH = RESERVE_RATIO * MAX_BLOCK_SIZE * BANDWIDTH_PERIOD;

// Trả về bandwidth đã sử dụng kể từ lần trước
export const getUsedBandwidthByAccount = function (account, now) {
  //tính khoảng thời gian giữa thời điểm hiện tại và thời điểm gần nhất đã sử dụng năng lượng
  const diff = account.bandwidthTime
    ? now - account.bandwidthTime
    : BANDWIDTH_PERIOD;

  return Math.ceil(Math.max(0, (BANDWIDTH_PERIOD - diff) / BANDWIDTH_PERIOD) * account.bandwidth);
};

// Trả về số lượng bandwidth tối đa có thể sử dụng của account
export const getMaxBandwidthByAccount = function (account) {
  //tính mức năng lượng tối đa mà tài khoản có thể sử dụng (phụ thuộc vào độ giàu của tài khoản)
  return Math.floor((account.balance / MAX_CELLULOSE) * NETWORK_BANDWIDTH);
};
