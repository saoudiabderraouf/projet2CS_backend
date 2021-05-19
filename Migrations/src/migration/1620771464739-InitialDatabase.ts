import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class InitialDatabase1620771464739 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Subscription",
            columns: [
                {
                    name: "idSub",
                    type: "int",
                    isPrimary: true, 
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: "subType",
                    type: "varchar",
                },
                {
                    name: "creationDate",
                    type: "timestamp", 
                    default: 'now()'
                },
                {
                    name: "reductionRate",
                    type: "float"
                }, 
                {
                    name: "parameter",
                    type: "varchar"
                }, 
                {
                    name: "type",
                    type: "varchar"
                }, 
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "PromoCode",
            columns: [
                {
                    name: "idPromoCode",
                    type: "int",
                    isPrimary: true, 
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "pricePoints",
                    type: "float",
                },
                {
                    name: "reductionRate",
                    type: "float"
                }
            ]
        }), true);

        await queryRunner.createTable(new Table({
            name: "Borne",
            columns: [
                {
                    name: "idBorne",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "nbOccupiedPlaces",
                    type: "int"
                },
                {
                    name: "nbTotalPlaces",
                    type: "int"
                },  
                {
                    name: "nbMaintenanceAgents",
                    type: "int"
                },
                {
                    name: "longitude",
                    type: "float"
                },
                {
                    name: "latitude",
                    type: "float"
                },
                {
                    name: "city",
                    type: "varchar"
                }
            ]
        }), true)
      
      
      await queryRunner.createTable(new Table({
            name: "Vehicle",
            columns: [
                {
                    name: "idVehicle",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "registration",
                    type: "int"
                },
                {
                    name: "vehicleType",
                    type: "varchar"
                },  
                {
                    name: "vehicleBrand",
                    type: "varchar"
                },
                {
                    name: "vehicleModel",
                    type: "varchar"
                },
                {
                    name: "fuelType",
                    type: "varchar"
                },
                {
                    name: " unitPricePerHour",
                    type: "float"
                },
                {
                    name: " unitPricePerDay",
                    type: "float"
                },
                {
                    name: "idBorne",
                    type: "int"
                },
                {
                    name: "vehicleColor",
                    type: "varchar"
                },
                {
                    name: "longitude",
                    type: "float"
                },
                {
                    name: "latitude",
                    type: "float"
                }
            ]
        }), true)
      
        await queryRunner.createForeignKey("Vehicle", new TableForeignKey({
            columnNames: ["idBorne"],
            referencedColumnNames: ["idBorne"],
            referencedTableName: "Borne"
        }));
        await queryRunner.createTable(new Table({
            name: "Penalty",
            columns: [
                {
                    name: "idPenalty",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "penaltyType",
                    type: "varchar"
                },
                {
                    name: "penaltyDescription",
                    type: "varchar"
                },
                {
                    name: "penaltyTotal",
                    type: "float",
                }
            
            ]
        }), true);
        await queryRunner.createTable(new Table({
            name: "User",
            columns: [
                {
                    name: "idUser",
                    type: "int",
                    isPrimary: true, 
                    isGenerated: true, 
                    generationStrategy: 'increment'
                },
                {
                    name: "userName",
                    type: "varchar"
                }, 
                {
                    name: "userType",
                    type: "enum", 
                    enum: ["tenant","agent", "decision_maker","agent_admin","account_admin", "technical_admin"]
                }, 
                {
                    name: "phoneNumber",
                    type: "int"
                }, 
                {
                    name: "lastName",
                    type: "varchar"
                }, 
                {
                    name: "firstName",
                    type: "varchar"
                }, 
                {
                    name: "address",
                    type: "varchar"
                }
            ]
        }), true)

      
        await queryRunner.createTable(new Table({
            name: "AuthUser",
            columns: [
                {
                    name: "idAuthUser",
                    type: "int",
                    isPrimary: true, 
                    isGenerated: true, 
                    generationStrategy: 'increment'
                },
                {
                    name: "idUser",
                    type: "int"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                }
            ]
        }), true);
      
        await queryRunner.createForeignKey("AuthUser", new TableForeignKey({
            columnNames: ["idUser"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
      
      await queryRunner.createTable(new Table({
            name: "DecisionMaker",
            columns: [
                {
                    name: "idDecisionMaker",
                    type: "int",
                    isPrimary: true, 
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name: "idUser",
                    type: "int"
                },
{
                    name: "address",
                    type: "varchar"
                }
            ]
        }), true);

        await queryRunner.createForeignKey("DecisionMaker", new TableForeignKey({
            columnNames: ["idUser"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
      
      
      await queryRunner.createTable(new Table({
            name: "Agent",
            columns: [
                {
                    name: "idAgent",
                    type: "int",
                    isPrimary: true, 
                    isGenerated: true, 
                    generationStrategy: 'increment'
                },
                {
                    name: "idUser",
                    type: "int"
                },
{
                    name: "personalPhoto",
                    type: "varchar"
                },
                {
                    name: "refPermis",
                    type: "varchar"
                }
            ]
        }), true);

        await queryRunner.createForeignKey("Agent", new TableForeignKey({
            columnNames: ["idUser"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
      
      
      await queryRunner.createTable(new Table({
            name: "AdminTechnical",
            columns: [
                {
                    name: "idAdminTech",
                    type: "int",
                    isPrimary: true, 
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name: "idUser",
                    type: "int"
                }
            ]
        }), true);

         await queryRunner.createForeignKey("AdminTechnical", new TableForeignKey({
            columnNames: ["idUser"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
      
      
      await queryRunner.createTable(new Table({
            name: "AdminAgent",
            columns: [
                {
                    name: "idAdminAgent",
                    type: "int",
                    isPrimary: true, 
                    isGenerated:true,
                    generationStrategy: 'increment'
                },
                {
                    name: "idUser",
                    type: "int",
                }
            ]
        }), true);

         await queryRunner.createForeignKey("AdminAgent", new TableForeignKey({
            columnNames: ["idUser"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
      
      
      await queryRunner.createTable(new Table({
            name: "AdminAccount",
            columns: [
                {
                    name: "idAdminAccount",
                    type: "int",
                    isPrimary: true, 
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "idUser",
                    type: "int",
                }
            ]
        }), true);

         await queryRunner.createForeignKey("AdminAccount", new TableForeignKey({
            columnNames: ["idUser"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
        await queryRunner.createTable(new Table({
            name: "Tenant",
            columns: [
                {
                    name: "idTenant",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "idUser",
                    type: "int"
                },
                {
                    name: "refPermit",
                    type: "varchar"
                },
                {
                    name: "profilePicture",
                    type: "varchar"
                },
                {
                    name: "permitPicture",
                    type: "varchar"
                },
                {
                    name: "selfie",
                    type: "varchar"
                },
                {
                    name: "subCard",
                    type: "int"
                },
                {
                    name: "points",
                    type: "int"
                },
                {
                    name: "accountState",
                    type: "varchar"
                }

            ]
        }), true);


        await queryRunner.createForeignKey("Tenant", new TableForeignKey({
            columnNames: ["idUser"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "CASCADE"
        }));
        await queryRunner.createTable(new Table({

            name: "Rental",
            columns: [
                {
                    name: "idRental",
                    type: "int",
                    isGenerated : true,
                    generationStrategy: 'increment',
                    isPrimary:  true
                },
                {
                    name: "rentalState",
                    type: "enum",
                    enum: ["archived", "active"], 
                    default: "'active'"
                },
                {
                    name: "idTenant",
                    type: "int"
                },
                {
                    name: "idVehicle",
                    type: "int"
                },
                {
                    name: "rentalDate",
                    type: "date"
                },
                {
                    name: "rentalTime",
                    type: "time"
                },
                {
                    name: "plannedRestitutionDate",
                    type: "date"
                },
                {
                    name: "plannedRestitutionTime",
                    type: "time"
                },
                {
                    name: "restitutionDate",
                    type: "date"
                },
                {
                    name: "restitutionTime",
                    type: "time"
                },
                {
                    name: "rentalType",
                    type: "int"
                },
                {
                    name: "idDepartBorne",
                    type: "int"
                },
                {
                    name: "idDestBorne",
                    type: "int"
                }
                
            ]
        }), true);

        await queryRunner.createForeignKey("Rental", new TableForeignKey({
            columnNames: ["idVehicle"],
            referencedColumnNames: ["idVehicle"],
            referencedTableName: "Vehicle",
            onDelete: "SET NULL"
        }));

        await queryRunner.createForeignKey("Rental", new TableForeignKey({
            columnNames: ["idTenant"],
            referencedColumnNames: ["idTenant"],
            referencedTableName: "Tenant",
            onDelete: "SET NULL"
        }));

        await queryRunner.createForeignKey("Rental", new TableForeignKey({
            columnNames: ["idDepartBorne"],
            referencedColumnNames: ["idBorne"],
            referencedTableName: "Borne",
            onDelete: "SET NULL"
        }));

        await queryRunner.createForeignKey("Rental", new TableForeignKey({
            columnNames: ["idDestBorne"],
            referencedColumnNames: ["idBorne"],
            referencedTableName: "Borne",
            onDelete: "SET NULL"
        }));        

        

        await queryRunner.createTable(new Table({
            name: "Bill",
            columns: [
                {
                    name: "idBill",
                    type: "int",
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "nbBill",
                    type: "int"
                },
                {
                    name: "idRental",
                    type: "int"
                },
                {
                    name: "creationDate",
                    type: "timestamp",
                    default: 'now()'
                },
                {
                    name: "baseRate",
                    type: "float"
                },
                {
                    name: "penaltyRate",
                    type: "float"
                },
                {
                    name: "totalRate",
                    type: "float"
                },
                {
                    name: "report",
                    type: "varchar"
                }
            
            ]
        }), true);


        await queryRunner.createForeignKey("Bill", new TableForeignKey({
            columnNames: ["idRental"],
            referencedColumnNames: ["idRental"],
            referencedTableName: "Rental",
            onDelete: "CASCADE"
        }));

        

        await queryRunner.createTable(new Table({
            name: "RentalPenalty",
            columns: [
                {
                    name: "idRentPenalty",
                    type: "int",
                    isPrimary: true, 
                    generationStrategy: 'increment',
                    isGenerated: true,
                },
                {
                    name: "idPenalty",
                    type: "int",
                },
                {
                    name: "idRental",
                    type: "int"
                }
            ]
        }), true);
        
        await queryRunner.createForeignKey("RentalPenalty", new TableForeignKey({
            columnNames: ["idPenalty"],
            referencedColumnNames: ["idPenalty"],
            referencedTableName: "Penalty",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("RentalPenalty", new TableForeignKey({
            columnNames: ["idRental"],
            referencedColumnNames: ["idRental"],
            referencedTableName: "Rental",
            onDelete: "CASCADE"
        }));

        
      
      
       await queryRunner.createTable(new Table({
            name: "VehicleAffectedAgent",
            columns: [
                {
                    name: "idAff",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "idAgent",
                    type: "int"
                },
                {
                    name: "idVehicle",
                    type: "int"
                }
            ]
        }), true)
      
      
        await queryRunner.createForeignKey("VehicleAffectedAgent", new TableForeignKey({
            columnNames: ["idVehicle"],
            referencedColumnNames: ["idVehicle"],
            referencedTableName: "Vehicle"
        }));
      
      
       await queryRunner.createForeignKey("VehicleAffectedAgent", new TableForeignKey({
            columnNames: ["idAgent"],
            referencedColumnNames: ["idAgent"],
            referencedTableName: "Agent"
        }));
      
      
      await queryRunner.createTable(new Table({
            name: "Panne",
            columns: [
                {
                    name: "idPanne",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "dateNotifPanne",
                    type: "date"
                },
                {
                    name: "dateReparationPanne",
                    type: "date"
                },
                {
                    name: "state",
                    type: "enum",
                    enum: ["archived", "in progress", "treated", "received"],
                    default : "'received'"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "numChassis",
                    type: "varchar"
                },
                {
                    name: "idAgentSentNotif",
                    type: "int"
                },
                {
                    name: "idAgentTreatPanne",
                    type: "int"
                },
                {
                    name: "severityLevel",
                    type: "int"
                }
            ]
        }), true)
      
       await queryRunner.createForeignKey("Panne", new TableForeignKey({
            columnNames: ["idAgentSentNotif"],
            referencedColumnNames: ["idAgent"],
            referencedTableName: "Agent"
        }));
      
       await queryRunner.createForeignKey("Panne", new TableForeignKey({
            columnNames: ["idAgentTreatPanne"],
            referencedColumnNames: ["idAgent"],
            referencedTableName: "Agent"
        }));
      
        await queryRunner.createTable(new Table({
            name: "TaskState",
            columns: [
                {
                    name: "idTaskState",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "description",
                    type: "varchar"
                }
                
            ]
        }), true);
        
        await queryRunner.createTable(new Table({
            name: "Equipment",
            columns: [
                {
                    name: "idEquipment",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "equipmentName",
                    type: "varchar"
                },
                {
                    name: "quantity",
                    type: "int"
                },
                {
                    name: "unitPrice",
                    type: "float"
                },
                {
                    name: "description",
                    type: "varchar"
                }
            ]
        }), true);
       await queryRunner.createTable(new Table({
            name: "Task",
            columns: [
                {
                    name: "idTask",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "idAgent",
                    type: "int"
                },
                {
                    name: "idVehicle",
                    type: "int"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "idTaskState",
                    type: "int"
                },
                {
                    name: "idEquipment",
                    type: "int"
                }
            ]
        }), true);
      
        await queryRunner.createForeignKey("Task", new TableForeignKey({
              columnNames: ["idTaskState"],
              referencedColumnNames: ["idTaskState"],
              referencedTableName: "TaskState"
          }));
      
        await queryRunner.createForeignKey("Task", new TableForeignKey({
              columnNames: ["idEquipment"],
              referencedColumnNames: ["idEquipment"],
              referencedTableName: "Equipment"
          }));

         

        await queryRunner.createTable(new Table({
            name: "Control",
            columns: [
                {
                    name: "idControl",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "controlDate",
                    type: "date"
                },
                {
                    name: "idTask",
                    type: "int"
                }
            ]
        }), true)

        await queryRunner.createForeignKey("Control", new TableForeignKey({
            columnNames: ["idTask"],
            referencedColumnNames: ["idTask"],
            referencedTableName: "Task",
            onDelete: "SET NULL"
        }));

        await queryRunner.createTable(new Table({
            name: "VehicleState",
            columns: [
                {
                    name: "idVehicleState",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "availability",
                    type: "enum",
                    enum: ["stopped", "allocated", "available","maintained"],
                    default: "'available'"
                },
                {
                  name: 'kilos',
                  type: 'float',
                },
                {
                    name: 'engineTemp',
                    type: 'float',
                },
                {
                    name: 'fuelLevel',
                    type: 'float',
                },
                {
                    name: 'oilLevel',
                    type: 'float',
                },
                {
                    name: 'batteryCharge',
                    type: 'float',
                },
                {
                    name: 'brakeFuild',
                    type: 'float',
                },
                {
                    name: 'idRental',
                    type: 'int',
                },
            ]
        }), true);

    
        await queryRunner.createForeignKey("VehicleState", new TableForeignKey({
            columnNames: ["idRental"],
            referencedColumnNames: ["idRental"],
            referencedTableName: "Rental",
            onDelete: "SET NULL"
        }));



        

        await queryRunner.createTable(new Table({
            name: "Signal",
            columns: [
                {
                    name: "idSignal",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "signalType",
                    type: "enum", 
                    enum: ["theft", "panne"]
                },
                {
                    name: "message",
                    type: "varchar"
                },
                {
                    name: "sourceType",
                    type: "enum", 
                    enum : ["Tenant", "Agent", "Auto"]
                },
                {
                    name: "idUserSource",
                    type: "int",
                    default:0
                },
                {
                    name: "idVehicle",
                    type: "int"
                },
                {
                    name: "sent_at",
                    type: "timestamp", 
                    default: 'now()'
                }
            ]
        }), true)
        await queryRunner.createForeignKey("Signal", new TableForeignKey({
            columnNames: ["idVehicle"],
            referencedColumnNames: ["idVehicle"],
            referencedTableName: "Vehicle",
            onDelete: "SET NULL"
        }));
        await queryRunner.createForeignKey("Signal", new TableForeignKey({
            columnNames: ["idUserSource"],
            referencedColumnNames: ["idUser"],
            referencedTableName: "User",
            onDelete: "SET NULL"
        }));
        await queryRunner.createTable(new Table({
            name: "VehiclePosition",
            columns: [
                {
                    name: "idPosition",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "idRental",
                    type: "int",
                }
                
            ]
        }), true)
        await queryRunner.createForeignKey("VehiclePosition", new TableForeignKey({
            columnNames: ["idRental"],
            referencedColumnNames: ["idRental"],
            referencedTableName: "Rental",
            onDelete: "SET NULL"
        }));
      

        await queryRunner.createTable(new Table({
            name: "VehicleTracking",
            columns: [
                {
                    name: "idTrack",
                    type: "int",
                    isGenerated:true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: "latitude",
                    type: "float"
                },
                {
                    name: "longitude",
                    type: "float"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default : 'now()'
                },
                {
                    name: "idPosition",
                    type: "int",
                }
                
            ]
        }), true)
        await queryRunner.createForeignKey("VehicleTracking", new TableForeignKey({
            columnNames: ["idPosition"],
            referencedColumnNames: ["idPosition"],
            referencedTableName: "VehiclePosition",
            onDelete: "SET NULL"
        }));
        
        

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Rental");
        await queryRunner.dropTable("Bill");
        await queryRunner.dropTable("Tenant");
        await queryRunner.dropTable("Penalty");
        await queryRunner.dropTable("RentalPenalty");
        await queryRunner.dropTable("Subscription");

        await queryRunner.dropTable("Borne");
        await queryRunner.dropTable("Panne");
        await queryRunner.dropTable("Vehicle");
        await queryRunner.dropTable("VehicleAffectedAgent");
        await queryRunner.dropTable("Task");

        await queryRunner.dropTable("User");
        await queryRunner.dropTable("AuthUser");
        await queryRunner.dropTable("DecisionMaker");
        await queryRunner.dropTable("Agent");
        await queryRunner.dropTable("AdminAgent");
        await queryRunner.dropTable("AdminAccount");
        await queryRunner.dropTable("AdminTechnical");

        await queryRunner.dropTable("Control");
        await queryRunner.dropTable("VehicleState");
        await queryRunner.dropTable("VehiclePosition");
        await queryRunner.dropTable("Equipment");
        await queryRunner.dropTable("Signal");
        await queryRunner.dropTable("VehiculeTracking");
        await queryRunner.dropTable("TaskState");

     

    }

}
