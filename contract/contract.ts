export const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_usdtToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_usdcToken",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_wbtcToken",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "bonusInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "bonusAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sellByDate",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "atOrAbove",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "atOrBelow",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "atPrice",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "meetSalesCondition",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "postDeadlineCheck",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "fundsWithdrawn",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "propertyNumber",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "startDateInUnixSeconds",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sellByDateInUnixSeconds",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "atOrAbove",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "atOrBelow",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "atPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bonusAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "createBonusInfo",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "propertyNumber",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "meetSalesCondition",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "postDeadlineCheck",
        "type": "bool"
      }
    ],
    "name": "updateBonusInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "usdcToken",
    "outputs": [
      {
        "internalType": "contract ERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "usdtToken",
    "outputs": [
      {
        "internalType": "contract ERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "wbtcToken",
    "outputs": [
      {
        "internalType": "contract ERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "Sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "Receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "propertyNumber",
        "type": "string"
      }
    ],
    "name": "withdrawFundsReceiver",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "Sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "Receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "propertyNumber",
        "type": "string"
      }
    ],
    "name": "withdrawFundsSender",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]