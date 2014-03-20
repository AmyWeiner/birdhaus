class CreateTemperature2s < ActiveRecord::Migration
  def change
    create_table :temperature2s do |t|
      t.float :temp
      t.datetime :time

      t.timestamps
    end
  end
end
