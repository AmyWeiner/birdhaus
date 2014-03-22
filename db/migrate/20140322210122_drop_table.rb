class DropTable < ActiveRecord::Migration
    def up
        drop_table :temperature1s
        drop_table :temperature2s
        drop_table :temperature3s
    end

    def down
        raise ActiveRecord::IrreversibleMigration
    end
end
